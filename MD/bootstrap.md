# bootstrap

## 引入
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
 
 npm install bootstrap@3

```

### 颜色区分
1.default 2.success 3.info 4.warning 5.danger 6.primary
(btn-info bf-info)

### 栅格系统(.row)等级范围
1.  1.xs:0-768px  2.sm:768-992px 3.md:992-1200px 4.lg:1200px++

2.  xs sm md lg也可以为bs中元素的大小(btn-lg btn-md)

3. 栅格系统位移
   col-xx-offset-*
   在xx（等级范围）下向右偏移 * 列

4. 隐藏和显示  
   hidden-xx    在xx（等级范围）下隐藏
   visible-xx  在xx（等级范围）下可见

5. bs兼容问题
  元素没有等级的 会与相邻较小的等级相同

### 图标引入
```html
<i class="glyphicon glyphicon-plus"></i>
```
