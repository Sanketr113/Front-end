export default function Hero() {
  return (
    <div className="hero min-h-[70vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://picsum.photos/400/300" className="max-w-sm rounded-lg shadow-2xl" alt="Hero" />
        <div>
          <h1 className="text-5xl font-bold">Welcome to HackathonApp!</h1>
          <p className="py-6">
            Build your full-stack idea fast. This is your starter template with DaisyUI and Tailwind ready.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
