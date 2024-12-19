
// --------------- 打字机 ---------------
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

// --------------- 跳转线---------------
        document.querySelectorAll('.card1, .works1, .posts1').forEach(function (container) {
            container.addEventListener('click', function () {
                // 获取当前元素的 data-url 属性值
                const url = container.getAttribute('data-url');
                // 在新标签页打开对应链接
                window.open(url, '_blank');
            });
        });
        
// --------------- 响应式设计 ---------------
function adjustPadding() {
    const container = document.querySelector('.main');
    const minWidth = 768; // 起始宽度
    const maxPadding = 30; // 最大 padding 百分比
    const minPadding = 5; // 最小 padding 百分比
    const screenWidth = window.innerWidth;

    // 如果屏幕宽度超过起始值，动态计算 padding
    if (screenWidth > minWidth) {
        // 计算百分比，保持丝滑递增
        const padding = Math.min(
            maxPadding,
            minPadding + ((screenWidth - minWidth) / 4000) * (maxPadding - minPadding)
        );
        container.style.padding = `0 ${padding}%`;
    } else {
        // 否则恢复最小 padding
        container.style.padding = `0 ${minPadding}%`;
    }
}

// 初始化调整
adjustPadding();

// 监听窗口变化，实时调整
window.addEventListener('resize', adjustPadding);

// --------------- 弹窗 ---------------
// 获取元素
const modal = document.getElementById('modal');
const openModalLink = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');

// 打开模态框
openModalLink.addEventListener('click', (e) => {
    e.preventDefault(); // 阻止默认跳转行为
    modal.style.display = 'flex'; // 显示模态框
});

// 关闭模态框
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none'; // 隐藏模态框
});

// 点击模态框背景关闭
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
