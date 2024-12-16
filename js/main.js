document.addEventListener('DOMContentLoaded', function () {
    // 打字机效果函数
    function typeWriter(elementId, text, speed, pause) {
        const element = document.getElementById(elementId);
        let index = 0;
        let direction = 1; // 1 表示打字，-1 表示回退

        function type() {
            element.textContent = text.slice(0, index);
            
            if (direction === 1 && index === text.length) {
                // 如果是打字模式并且完成打字
                direction = -1; // 转为回退模式
                setTimeout(type, pause); // 停留时间后继续
            } else if (direction === -1 && index === 0) {
                // 如果是回退模式并且缩回完毕
                direction = 1; // 转为打字模式
                setTimeout(type, pause); // 停留时间后继续
            } else {
                // 正常打字或回退
                index += direction;
                setTimeout(type, speed);
            }
        }

        type(); // 初次调用
    }

    // 要显示的文本内容
    const text = "永远相信美好的事情即将发生！";
    const typingSpeed = 200; // 每个字符的时间间隔（毫秒）
    const pauseDuration = 1000; // 停留时间（毫秒）

    // 调用打字机效果
    typeWriter("typing", text, typingSpeed, pauseDuration);
});


