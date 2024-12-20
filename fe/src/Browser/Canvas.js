import "./Canvas.scss"
import { Window } from "../Interface/Window";
import { useEffect, useRef } from "react";


export function Canvas({ 창닫기 }) {
  return (
    <Window id="Canvas" tabText="캔버스 연습" 닫기={창닫기}>
      <Ccanvas />
    </Window>
  );
}

export function Ccanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const COLORS = [
      { r: 0, g: 26, b: 110 }, //navy
      { r: 7, g: 71, b: 153 }, //blue
      { r: 0, g: 153, b: 144 }, //teal
      { r: 225, g: 255, b: 187 }, //green
    ];

    class GlowParticle {
      constructor(x, y, radius, rgb) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.rgb = rgb;

        this.vx = Math.random() * 4;
        this.vy = Math.random() * 4;

        this.sinValue = Math.random();
      }

      animate(ctx, stageWidth, stageHeight) {
        this.sinValue += 0.01;

        this.radius += Math.sin(this.sinValue);

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) {
          this.vx *= -1;
          this.x += 10;
        } else if (this.x > stageWidth) {
          this.vx *= -1;
          this.x -= 10;
        }

        if (this.y < 0) {
          this.vy *= -1;
          this.y += 10;
        } else if (this.y > stageHeight) {
          this.vy *= -1;
          this.y -= 10;
        }

        ctx.beginPath();
        const g = ctx.createRadialGradient(
          this.x,
          this.y,
          this.radius * 0.01,
          this.x,
          this.y,
          this.radius
        );
        g.addColorStop(0, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 1)`);
        g.addColorStop(1, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 0)`);
        ctx.fillStyle = g;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
      }
    }

    class ParticleSystem {
      constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        this.totalParticles = 15;
        this.particles = [];
        this.maxRadius = 900;
        this.minRadius = 400;

        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));
      }

      resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        this.createParticles();
      }

      createParticles() {
        let curColor = 0;
        this.particles = [];

        for (let i = 0; i < this.totalParticles; i++) {
          const item = new GlowParticle(
            Math.random() * this.stageWidth,
            Math.random() * this.stageHeight,
            Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
            COLORS[curColor]
          );

          if (++curColor >= COLORS.length) {
            curColor = 0;
          }

          this.particles[i] = item;
        }
      }

      animate() {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        for (let i = 0; i < this.totalParticles; i++) {
          const item = this.particles[i];
          item.animate(this.ctx, this.stageWidth, this.stageHeight);
        }
      }
    }

    const canvas = canvasRef.current;
    const particleSystem = new ParticleSystem(canvas);

    return () => {
      window.removeEventListener("resize", particleSystem.resize);
    };
  }, []);

  return (
    <canvas ref={canvasRef}></canvas>
  )
}