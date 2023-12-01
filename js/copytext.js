function copyText(id) {
    // 获取文本框元素
    var copyText = document.getElementById(id);
    // 使用 Clipboard API 复制文本
    navigator.clipboard.writeText(copyText.value)
        .then(function() {
            alert("已复制文本: " + copyText.value);
        })
        .catch(function(err) {
            console.error('复制失败：', err);
        });
}
