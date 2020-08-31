# 画布

1. ### 画布在js操作语句里有很多不带单位


```javascript
var canvas=document.getDocumentById('canvas')

// 获取画布2d绘画环境
var c=canvas.getContext('2d')

```

### 特点：

清楚画布的方式：

1. 利用填充矩形覆盖
2. 重新定义画布像素点

### 画布css大小
```javascript
canvas.style.width='500px'
canvas,style.height='300px'


```

### 像素点
默认值 500px 300px
```javascript
canvas.width=500
canvas.height=300

```

#### 画布大小与像素成1：1比列，画布正常显示

#### 如果像素点与画布大小不成比例 画布则不正常显示
```javascript
canvas.width=450
canvas.height=200

```

## 画布常见几种图形
1. 画圆
```javascript
// c.arc(x/横坐标,y纵坐标,半径,起始弧度,终止弧度,ture/false)
c.arc(100,100,100,0,Math.Pi/2,ture)

// 填充圆 画一个实心圆
c.fill()

```


2. 画线 画矩形
```javascript
// 画线
c.stroke()

// 画矩形

// 填充
c.fillStyle='red' 
// c.fillRect(x/横坐标,y纵坐标,宽,高)
c.fillRect(100,100,500,300)


// 画线时添加抬笔
// 开始画
c.beginPath()

// 结束
c.closePath()



```
