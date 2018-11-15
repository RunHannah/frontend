import React, { Component } from 'react';
import { scaleLinear, scaleTime } from 'd3-scale';
import { select } from 'd3-selection';
import { line, curveCatmullRom } from 'd3-shape';
import { axisBottom, axisLeft } from 'd3-axis';
import { timeMinute } from 'd3-time';
import PropTypes from 'prop-types';

class Marey extends Component {
  constructor(props) {
    super(props);
    this.createLine = this.createLine.bind(this);
  }

  componentDidMount() {
    const { schedule, trips, direction } = this.props;
    schedule.forEach((element) => {
      const data = JSON.parse(element);
      if (data[0].stop_headsign === direction) {
        this.createLine(data, 'lightGrey');
      }
    });
    trips.forEach((element) => {
      const data = JSON.parse(element);
      if (data[0].direction === 0) {
        this.createLine(data, 'steelBlue');
      }
    });
  }

  componentDidUpdate() {
  }

  createLine(lineData, color) {
    const { node } = this;
    const { size, dates } = this.props;
    const [width, height] = size;
    const dateMin = new Date(dates.min);
    const dateMax = new Date(dates.max);
    const yScale = scaleTime()
      .domain([dateMin, dateMax])
      .range([0, height]);
    const xScale = scaleLinear()
      .domain([0, 1])
      .range([0, width]);

    const lineFunction = line()
      .x(d => xScale(d.relative_position))
      .y((d) => {
        const date = new Date(d.datetime);
        return yScale(date);
      })
      .curve(curveCatmullRom.alpha(0.5));

    const xAxis = axisBottom().scale(xScale);
    xAxis.ticks(10);

    const yAxis = axisLeft().scale(yScale);
    yAxis.ticks(timeMinute.every(5));

    select(node)
      .attr('width', width + 50)
      .attr('height', height + 50);

    select(node).append('path')
      .attr('d', lineFunction(lineData))
      .attr('stroke', color)
      .attr('stroke-width', 2)
      .attr('fill', 'none')
      .attr('transform', 'translate(50, 0)');

    select(node).append('g')
      .attr('transform', `translate(50, ${height})`)
      .style('font', '16px raleway')
      .call(xAxis);
    select(node).append('g')
      .attr('transform', 'translate(50, 0)')
      .style('font', '16px raleway')
      .call(yAxis);
  }

  render() {
    return <svg ref={(node) => { this.node = node; }} />;
  }
}

Marey.propTypes = {
  size: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.number])),
  direction: PropTypes.string.isRequired,
  dates: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.string])).isRequired,
  schedule: PropTypes.arrayOf(PropTypes.string),
  trips: PropTypes.arrayOf(PropTypes.string),
};

Marey.defaultProps = {
  size: [250, 250],
  schedule: null,
  trips: null,
};

export default Marey;
