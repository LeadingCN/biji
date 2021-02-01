//必须分清楚 节点与元素的区别 
//元素与节点区别 #text回车也算一个树结构节点 但不属于树结构元素 
//通过document.head  document.body 下的方法对html元素或节点进行操作
document.head.firstChild //子类
document.head.lastChild
document.body.parentNode //父类
document.body.nextSibling //同级
document.body.previousSibling //上一个

//常用搜索节点元素方法
//document.getxxxbyxx 现在用
document.querySelector() // .类 #id 返回匹配的第一个元素
document.querySelectorAll()// 返回匹配的静态节点集合 不会因为当前界面节点增加而增加
document.getElementsByTagName()//返回匹配的动态元素集合 可以根据当前界面节点增加减少改变 
document.body.closest(".from") //返回匹配的最近的父元素
//每个节点都是一个类对象 有共同的类属性 
document.body.tagName
document.head.tagName
document.body.nodeType
document.body.nodeName
document.body.innerHTML //返回页面文本 包含<li>
document.body.textContent//获取页面文本 包含空格
//每个元素 中可以 .id点出来是叫特性 自定义的叫属性 
//属性没办法通过.出来并且没办法通过document.body.自定义属性读出来
//只能document.body.getAttribute("属性名")获取
//document.body.setAttribute 设置属性 removeAttribute 移除 hasAttribute是否有
//data-开头的都是程序员自定义属性 可以点出来 元素.dataset.自定义属性
//元素的添加减少 
document.append()
//元素.appendChild()末端 元素.insertBefore()开头 元素.before()在 该元素前面添加 元素.after()在该元素后面添加
//元素.removeChild()移除 元素.replaceChild()替换
//元素.cloneNode 分深度 包含文本信息 浅度仅样式属性
DocumentFragment()//元素对象集合容器 

//Event 事件
//通过 特性调用 例如button的onClcik = "alert('点击')" 或者 关联自定义方法 onClick = 自定义方法名(参数)
//或者 btn元素.onClick = funtion(){ }