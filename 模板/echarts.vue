const echartTemplate = {
  // 1. 标题配置
  title: {
    text: '图表标题',
    textStyle: {
      color: '#333',
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: 'Arial',
      lineHeight: 20
    },
    subtext: '副标题',
    subtextStyle: {
      color: '#666',
      fontSize: 14
    },
    left: 'center', // 'left' | 'center' | 'right' | 像素值 | 百分比
    top: 'top', // 'top' | 'middle' | 'bottom' | 像素值 | 百分比
    backgroundColor: 'transparent',
    borderColor: '#ccc',
    borderWidth: 0,
    padding: 5,
    itemGap: 10,
    textAlign: 'auto',
    textVerticalAlign: 'auto'
  },

  // 2. 图例配置
  legend: {
    type: 'plain', // 'plain' | 'scroll'
    show: true,
    zlevel: 0,
    z: 2,
    left: 'auto',
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    width: 'auto',
    height: 'auto',
    orient: 'horizontal', // 'horizontal' | 'vertical'
    align: 'auto',
    padding: 5,
    itemGap: 10,
    itemWidth: 25,
    itemHeight: 14,
    symbolKeepAspect: true,
    formatter: function (name) {
      return name;
    },
    selectedMode: true, // true | false | 'single' | 'multiple'
    inactiveColor: '#ccc',
    textStyle: {
      color: '#333',
      fontSize: 12,
      fontWeight: 'normal'
    },
    tooltip: {
      show: false
    },
    data: ['系列1', '系列2', '系列3'] // 需要与 series 中的 name 对应
  },

  // 3. 网格配置
  grid: {
    show: false,
    zlevel: 0,
    z: 0,
    left: '10%',
    top: 60,
    right: '10%',
    bottom: 60,
    width: 'auto',
    height: 'auto',
    containLabel: true,
    backgroundColor: 'transparent',
    borderColor: '#ccc',
    borderWidth: 1,
    shadowBlur: 0,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffsetX: 0,
    shadowOffsetY: 0
  },

  // 4. X轴配置
  xAxis: {
    type: 'category', // 'value' | 'category' | 'time' | 'log'
    show: true,
    position: 'bottom', // 'top' | 'bottom'
    offset: 0,
    name: 'X轴名称',
    nameLocation: 'end', // 'start' | 'middle' | 'end'
    nameTextStyle: {
      color: '#666',
      fontSize: 12,
      padding: [3, 0, 0, 0]
    },
    nameGap: 15,
    nameRotate: 0,
    inverse: false,
    boundaryGap: true,
    min: null,
    max: null,
    scale: false,
    splitNumber: 5,
    minInterval: 0,
    maxInterval: null,
    interval: 'auto',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    
    // 坐标轴轴线
    axisLine: {
      show: true,
      onZero: true,
      lineStyle: {
        color: '#333',
        width: 1,
        type: 'solid'
      }
    },
    
    // 坐标轴刻度
    axisTick: {
      show: true,
      alignWithLabel: true,
      inside: false,
      length: 5,
      lineStyle: {
        color: '#333',
        width: 1
      }
    },
    
    // 坐标轴刻度标签
    axisLabel: {
      show: true,
      interval: 'auto',
      inside: false,
      rotate: 0,
      margin: 8,
      color: '#666',
      fontSize: 12,
      formatter: function (value, index) {
        return value;
      }
    },
    
    // 坐标轴分割线
    splitLine: {
      show: true,
      lineStyle: {
        color: ['#eee'],
        width: 1,
        type: 'solid'
      }
    },
    
    // 坐标轴区域分隔
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)']
      }
    }
  },

  // 5. Y轴配置（与X轴类似）
  yAxis: {
    type: 'value',
    show: true,
    position: 'left',
    name: 'Y轴名称',
    nameTextStyle: {
      color: '#666',
      fontSize: 12
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#333'
      }
    },
    axisTick: {
      show: true
    },
    axisLabel: {
      show: true,
      color: '#666',
      fontSize: 12,
      formatter: '{value}'
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ['#eee']
      }
    }
  },

  // 6. 极坐标系配置（用于雷达图等）
  polar: {
    center: ['50%', '50%'],
    radius: '75%'
  },

  // 7. 半径轴配置
  radiusAxis: {
    type: 'value',
    min: 0,
    max: 100
  },

  // 8. 角度轴配置
  angleAxis: {
    type: 'category',
    data: ['A', 'B', 'C', 'D', 'E'],
    startAngle: 90
  },

  // 9. 雷达图坐标系配置
  radar: {
    shape: 'polygon',
    indicator: [
      { name: '指标1', max: 100 },
      { name: '指标2', max: 100 },
      { name: '指标3', max: 100 },
      { name: '指标4', max: 100 }
    ]
  },

  // 10. 数据区域缩放
  dataZoom: [
    {
      type: 'slider', // 'inside' | 'slider'
      show: true,
      xAxisIndex: 0,
      start: 0,
      end: 100,
      height: 20,
      bottom: 10,
      backgroundColor: 'rgba(47,69,84,0.1)',
      fillerColor: 'rgba(47,69,84,0.3)',
      borderColor: '#ccc',
      handleStyle: {
        color: '#2f4554'
      }
    }
  ],

  // 11. 视觉映射
  visualMap: {
    type: 'continuous', // 'continuous' | 'piecewise'
    min: 0,
    max: 100,
    calculable: true,
    orient: 'vertical',
    left: 'left',
    top: 'center',
    inRange: {
      color: ['#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027']
    },
    textStyle: {
      color: '#333'
    }
  },

  // 12. 工具箱
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar', 'stack'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },

  // 13. 提示框配置
  tooltip: {
    trigger: 'axis', // 'item' | 'axis' | 'none'
    show: true,
    showContent: true,
    alwaysShowContent: false,
    triggerOn: 'mousemove', // 'mousemove' | 'click' | 'none'
    position: function (point, params, dom, rect, size) {
      return [point[0], point[1]];
    },
    formatter: function (params) {
      let result = `${params[0].name}<br/>`;
      params.forEach(item => {
        result += `${item.seriesName}: ${item.value}<br/>`;
      });
      return result;
    },
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderColor: '#333',
    borderWidth: 0,
    padding: 5,
    textStyle: {
      color: '#fff',
      fontSize: 14
    },
    extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
  },

  // 14. 坐标轴指示器
  axisPointer: {
    type: 'line', // 'line' | 'shadow' | 'none'
    snap: true,
    label: {
      show: true,
      backgroundColor: '#333'
    },
    lineStyle: {
      color: '#555',
      width: 1,
      type: 'solid'
    },
    shadowStyle: {
      color: 'rgba(150,150,150,0.3)'
    }
  },

  // 15. 区域选择控制器
  brush: {
    toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
    xAxisIndex: 0
  },

  // 16. 地理坐标系
  geo: {
    map: 'china',
    roam: true,
    label: {
      show: true
    },
    itemStyle: {
      borderColor: '#fff',
      areaColor: '#eee'
    },
    emphasis: {
      itemStyle: {
        areaColor: '#ffa'
      }
    }
  },

  // 17. 时间轴
  timeline: {
    axisType: 'time',
    currentIndex: 0,
    autoPlay: true,
    playInterval: 2000,
    data: ['2024-01', '2024-02', '2024-03']
  },

  // 18. 图形系列 - 多种类型示例
  series: [
    // 折线图系列
    {
      name: '折线图',
      type: 'line',
      data: [120, 132, 101, 134, 90, 230, 210],
      smooth: true,
      symbol: 'circle',
      symbolSize: 8,
      showSymbol: true,
      stack: '总量',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(255,0,0,0.3)' },
            { offset: 1, color: 'rgba(255,0,0,0)' }
          ]
        }
      },
      lineStyle: {
        color: '#ff0000',
        width: 2,
        type: 'solid'
      },
      itemStyle: {
        color: '#ff0000',
        borderColor: '#fff',
        borderWidth: 2
      },
      emphasis: {
        focus: 'series',
        itemStyle: {
          borderWidth: 4
        }
      },
      markPoint: {
        data: [
          { type: 'max', name: '最大值' },
          { type: 'min', name: '最小值' }
        ]
      },
      markLine: {
        data: [
          { type: 'average', name: '平均值' }
        ]
      },
      markArea: {
        data: [
          [{ xAxis: '周一' }, { xAxis: '周三' }],
          [{ xAxis: '周四' }, { xAxis: '周六' }]
        ]
      }
    },
    
    // 柱状图系列
    {
      name: '柱状图',
      type: 'bar',
      data: [220, 182, 191, 234, 290, 330, 310],
      barWidth: '60%',
      barGap: '30%',
      barCategoryGap: '20%',
      itemStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ]
        }
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    },
    
    // 饼图系列
    {
      name: '饼图',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['75%', '50%'],
      data: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ],
      roseType: 'radius',
      label: {
        formatter: '{b}: {c} ({d}%)'
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    },
    
    // 散点图系列
    {
      name: '散点图',
      type: 'scatter',
      data: [[10, 8], [5, 12], [15, 6], [8, 9], [12, 10]],
      symbolSize: function (data) {
        return Math.sqrt(data[2]) * 5;
      },
      itemStyle: {
        color: '#ff0000',
        opacity: 0.8
      }
    }
  ],

  // 19. 动画配置
  animation: true,
  animationDuration: 1000,
  animationEasing: 'cubicOut',
  animationDelay: 0,
  animationDurationUpdate: 300,
  animationEasingUpdate: 'cubicOut',
  animationDelayUpdate: 0,

  // 20. 状态配置
  stateAnimation: {
    duration: 300,
    easing: 'cubicOut'
  },

  // 21. 混合配置
  blendMode: 'source-over',

  // 22. 层级配置
  zlevel: 0,
  z: 2,

  // 23. 全局文本样式
  textStyle: {
    color: '#333',
    fontSize: 12,
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontStyle: 'normal'
  },

  // 24. 背景色
  backgroundColor: 'transparent',

  // 25. 暗黑模式支持
  darkMode: false,

  // 26. 颜色配置
  color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],

  // 27. 媒体查询配置
  media: [
    {
      query: {
        maxWidth: 600
      },
      option: {
        legend: {
          right: 10,
          top: '20%',
          orient: 'vertical'
        },
        series: [
          {
            radius: [20, '50%'],
            center: ['50%', '30%']
          }
        ]
      }
    }
  ]
};

// 使用示例
let chart = echarts.init(document.getElementById('chart'));
chart.setOption(echartTemplate);