// 获取 canvas 元素
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

// 设置canvas尺寸为窗口大小
function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
setCanvasSize();
window.addEventListener('resize', setCanvasSize);

// 雪花类
class Snowflake {
    constructor() {
        this.reset();
    }

    reset() {
        // 随机生成雪花的位置、大小和速度
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.size = Math.random() * 3 + 2; // 2-5像素
        this.speed = Math.random() * 1 + 0.5; // 0.5-1.5的速度
        this.wind = Math.random() * 0.5 - 0.25; // 左右飘动范围
    }

    update() {
        this.y += this.speed;
        this.x += this.wind;

        // 如果雪花落到底部，重置位置
        if (this.y > canvas.height) {
            this.reset();
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fill();
    }
}

// 创建雪花数组
const snowflakes = Array(100).fill().map(() => new Snowflake());

// 动画循环
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    snowflakes.forEach(snowflake => {
        snowflake.update();
        snowflake.draw();
    });

    requestAnimationFrame(animate);
}

// 开始动画
animate(); 