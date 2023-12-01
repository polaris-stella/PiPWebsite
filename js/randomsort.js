window.onload = function() {
    var container = document.getElementById('acknowledgments');
    var boxes = container.children;
    var boxesArray = Array.from(boxes);

    // 随机打乱数组顺序
    boxesArray.sort(function () {
        return 0.5 - Math.random();
    });

    // 将打乱顺序后的子元素重新放回父容器
    for (var i = 0; i < boxesArray.length; i++) {
        container.appendChild(boxesArray[i]);
    }
}
