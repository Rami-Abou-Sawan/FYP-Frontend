import React from "react";
import PropTypes from "prop-types";

import { format } from "d3-format";
import { timeFormat } from "d3-time-format";

import { ChartCanvas, Chart, ZoomButtons } from "react-stockcharts";
import {
  BarSeries,
  AreaSeries,
  CandlestickSeries,
  LineSeries,
  BollingerSeries,
} from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import {
  CrossHairCursor,
  EdgeIndicator,
  CurrentCoordinate,
  MouseCoordinateX,
  MouseCoordinateY,
} from "react-stockcharts/lib/coordinates";

import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import {
  OHLCTooltip,
  MovingAverageTooltip,
  BollingerBandTooltip,
} from "react-stockcharts/lib/tooltip";
import { Label } from "react-stockcharts/lib/annotation";
import {
  ema,
  macd,
  sma,
  bollingerBand,
  rsi,
} from "react-stockcharts/lib/indicator";
import { ClickCallback } from "react-stockcharts/lib/interactive";
import { fitWidth } from "react-stockcharts/lib/helper";

const bbStroke = {
  top: "#964B00",
  middle: "#000000",
  bottom: "#964B00",
};

const bbFill = "#4682B4";

const mouseEdgeAppearance = {
  textFill: "#4682B4",
  stroke: "#BCDEFA",
  strokeOpacity: 1,
  strokeWidth: 1,
  arrowWidth: 5,
  fill: "05233B",
};

class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.saveNode = this.saveNode.bind(this);
    this.resetYDomain = this.resetYDomain.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  componentDidMount() {
    this.setState({
      suffix: 1,
    });
  }
  saveNode(node) {
    this.node = node;
  }
  resetYDomain() {
    this.node.resetYDomain();
  }
  handleReset() {
    this.setState({
      suffix: this.state.suffix + 1,
    });
  }
  render() {
    const { type, data: initialData, width, ratio, ticker, buy } = this.props;
    const { mouseEvent, panEvent, zoomEvent, zoomAnchor, clamp } = this.props;
    const ema26 = ema()
      .options({
        windowSize: 26,
        sourcePath: "close",
      })
      .id(0)
      .merge((d, c) => {
        d.ema26 = c;
      })
      .accessor((d) => d.ema26);

    const ema12 = ema()
      .options({
        windowSize: 12,
        sourcePath: "close",
      })
      .id(1)
      .merge((d, c) => {
        d.ema12 = c;
      })
      .accessor((d) => d.ema12);

    const macdCalculator = macd()
      .options({
        fast: 12,
        slow: 26,
        signal: 9,
      })
      .merge((d, c) => {
        d.macd = c;
      })
      .accessor((d) => d.macd);

    const smaVolume50 = sma()
      .id(3)
      .options({
        windowSize: 50,
        sourcePath: "volume",
      })
      .merge((d, c) => {
        d.smaVolume50 = c;
      })
      .accessor((d) => d.smaVolume50)
      .stroke("#4682B4")
      .fill("#4682B4");

    const smaVolume200 = sma()
      .id(4)
      .options({
        windowSize: 200,
        sourcePath: "volume",
      })
      .merge((d, c) => {
        d.smaVolume200 = c;
      })
      .accessor((d) => d.smaVolume200)
      .stroke("#964B00")
      .fill("#964B00");

    const rsiCalculator = rsi()
      .options({ windowSize: 14 })
      .merge((d, c) => {
        d.rsi = c;
      })
      .accessor((d) => d.rsi);

    const bb = bollingerBand()
      .merge((d, c) => {
        d.bb = c;
      })
      .accessor((d) => d.bb);

    const calculatedData = rsiCalculator(
      smaVolume200(smaVolume50(macdCalculator(ema12(ema26(bb(initialData))))))
    );
    const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(
      (d) => d.date
    );
    const { data, xScale, xAccessor, displayXAccessor } =
      xScaleProvider(calculatedData);

    const gridHeight = 550;
    const gridWidth = width - 140;
    const showGrid = true;
    const yGrid = showGrid
      ? { innerTickSize: -1 * gridWidth, tickStrokeOpacity: 0.2 }
      : {};
    const xGrid = showGrid
      ? { innerTickSize: -1 * gridHeight, tickStrokeOpacity: 0.2 }
      : {};

    return (
      <ChartCanvas
        height={600}
        width={width}
        ratio={ratio}
        margin={{ left: 70, right: 70, top: 20, bottom: 30 }}
        type={type}
        seriesName={ticker.toUpperCase()}
        data={data}
        xScale={xScale}
        xAccessor={xAccessor}
        displayXAccessor={displayXAccessor}
        ref={this.saveNode}
        mouseEvent={mouseEvent}
        panEvent={panEvent}
        zoomEvent={zoomEvent}
        clamp={clamp}
        zoomAnchor={zoomAnchor}
      >
        <Label
          x={(width - 70 - 70) / 2}
          y={35}
          fontSize={30}
          fill="#FFFFFF"
          text={ticker.toUpperCase()}
        />
        <Chart
          id={1}
          height={400}
          yExtents={[
            (d) => [d.high, d.low],
            ema26.accessor(),
            ema12.accessor(),
            bb.accessor(),
          ]}
          padding={{ top: 10, bottom: 20 }}
          yPan={true}
        >
          <XAxis
            axisAt="bottom"
            orient="bottom"
            showTicks={false}
            outerTickSize={0}
            zoomEnabled={zoomEvent}
          />
          <YAxis
            axisAt="right"
            orient="right"
            ticks={5}
            zoomEnabled={zoomEvent}
            {...yGrid}
          />

          <MouseCoordinateY
            at="right"
            orient="right"
            displayFormat={format(".2f")}
            {...mouseEdgeAppearance}
          />

          <ClickCallback
            onClick={(moreProps) => {
              const realY = moreProps.mouseXY[1];
              const {
                chartConfig: { yScale },
              } = moreProps;
              const price = Number(yScale.invert(realY)).toFixed(2);
              let input = buy
                ? document.getElementById(ticker).querySelector("#buy")
                : document.getElementById(ticker).querySelector("#sell");
              input.value = price;
            }}
          />

          <BollingerSeries
            yAccessor={(d) => d.bb}
            stroke={bbStroke}
            fill={bbFill}
          />

          <LineSeries yAccessor={ema26.accessor()} stroke={ema26.stroke()} />
          <LineSeries yAccessor={ema12.accessor()} stroke={ema12.stroke()} />

          <CandlestickSeries />

          <CurrentCoordinate
            yAccessor={ema26.accessor()}
            fill={ema26.stroke()}
          />
          <CurrentCoordinate
            yAccessor={ema12.accessor()}
            fill={ema12.stroke()}
          />

          <EdgeIndicator
            itemType="last"
            orient="right"
            edgeAt="right"
            yAccessor={(d) => d.close}
            fill={(d) => (d.close > d.open ? "#6BA583" : "#FF7F7F")}
            stroke={(d) => (d.close > d.open ? "#6BA583" : "#FF7F7F")}
            textFill={(d) => (d.close > d.open ? "#0B4228" : "#420806")}
            strokeOpacity={1}
            strokeWidth={1}
            arrowWidth={5}
          />

          <OHLCTooltip origin={[-40, 0]} textFill={"#FFFFFF"} />
          <MovingAverageTooltip
            onClick={(e) => console.log(e)}
            origin={[-38, 15]}
            options={[
              {
                yAccessor: ema26.accessor(),
                type: "EMA",
                stroke: ema26.stroke(),
                windowSize: ema26.options().windowSize,
              },
              {
                yAccessor: ema12.accessor(),
                type: "EMA",
                stroke: ema12.stroke(),
                windowSize: ema12.options().windowSize,
              },
            ]}
            textFill={"#FFFFFF"}
          />
          <BollingerBandTooltip
            origin={[-38, 60]}
            yAccessor={(d) => d.bb}
            options={bb.options()}
            textFill={"#FFFFFF"}
          />
          <ZoomButtons onReset={() => this.setState({ suffix: 1 })} />
        </Chart>
        <Chart
          id={2}
          height={150}
          yExtents={[(d) => d.volume, smaVolume200.accessor()]}
          origin={(w, h) => [0, h - 150]}
          yPan={true}
        >
          <YAxis
            axisAt="left"
            orient="left"
            ticks={5}
            tickFormat={format(".2s")}
          />
          <XAxis axisAt="bottom" orient="bottom" {...xGrid} />

          <MouseCoordinateX
            at="bottom"
            orient="bottom"
            displayFormat={timeFormat("%Y-%m-%d")}
            rectRadius={5}
            {...mouseEdgeAppearance}
          />

          <MouseCoordinateY
            at="left"
            orient="left"
            displayFormat={format(".4s")}
            {...mouseEdgeAppearance}
          />

          <AreaSeries
            yAccessor={smaVolume50.accessor()}
            stroke={smaVolume50.stroke()}
            fill={smaVolume50.fill()}
          />
          <AreaSeries
            yAccessor={smaVolume200.accessor()}
            stroke={smaVolume200.stroke()}
            fill={smaVolume200.fill()}
          />
          <BarSeries
            yAccessor={(d) => d.volume}
            fill={(d) => (d.close > d.open ? "#6BA583" : "#FF0000")}
          />
        </Chart>
        <CrossHairCursor />
      </ChartCanvas>
    );
  }
}

Charts.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

Charts.defaultProps = {
  type: "svg",
  mouseMoveEvent: true,
  panEvent: true,
  zoomEvent: true,
  clamp: false,
};

Charts = fitWidth(Charts);

export default Charts;
