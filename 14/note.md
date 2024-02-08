## NodeList 和 Array的区别

DOM提供的一些方法，比如getElementById, QuerySelector这些返回的都是NodeList,而非js中的array, NodeList可以被遍历（for循环， while循环都可以），但不能被应用array的方法， 比如forEach, map, slice。 为什么要搞得不一样呢，因为DOM是一种标准化的数据结构，它不仅仅是为了js服务的，它在xml等语言中也可以被使用，因此它提供的是一层标准化的接口，而非直接和js做适配。

## childNodes 和 children的区别

childNodes会显示文本元素+node元素，而children只会显示node元素

## 减少浏览器在计算和绘制之间来回切换的次数

如果你有一个循环打印元素的程序，那样的话将会导致程序非常缓慢，因为每次新增一个元素，都要在之前的基础和样式上计算新增元素的打印位置，这很糟糕。更好的做法是，把这些要新增的元素（举个例子，要新增100个p元素）都先存进一个容器中，比如一个div元素中，然后在打印出div来，这样可以节省大量的时间

## 活的NodeList 和 死的NodeList

活的，意味着动态的，即当对象发生变化时，NodeList中的内容也发生变化，即此时NodeList是一个硬拷贝下来的对象， 而死的，意味着静态的，当网页对象发生变化时，NodeList中的内容不发生变化，此时NodeList是一个浅拷贝下来的对象。

为什么要区分活的和死的呢，因为常用的两个方法getElement和 querySelector返回的NodeList就有这个区别,前者返回的是动态NodeList,而后者返回的是静态NodeList
