## in 关键字 和 includes 关键字

key in arr , 判断的是key 是否在arr中的键中， 如果是普通array的话， 那么键就是0,1,2,3 ...
因此， 你不能预期'foo' in ['foo', 'bar'] 返回的结果为真， 它实际上返回的是false。

但是， 你可以用['foo', 'bar'].includes('foo') 来判断array中是否包含'foo'这个值。

而对于一个对象来说， 想要判断是否包含某个属性， 则可以用in关键字， 原因是对象的键就是属性名。

对象没有Inlcudes方法。
