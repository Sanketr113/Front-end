export default function Form() {
  return (
    <form className="card bg-base-100 shadow-xl p-6 max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Submit Details</h2>
      <div className="form-control mb-4">
        <label className="label">Name</label>
        <input type="text" placeholder="Enter your name" className="input input-bordered" />
      </div>
      <div className="form-control mb-4">
        <label className="label">Email</label>
        <input type="email" placeholder="Enter your email" className="input input-bordered" />
      </div>
      <div className="form-control mb-4">
        <label className="label">Message</label>
        <textarea className="textarea textarea-bordered" placeholder="Write something"></textarea>
      </div>
      <button className="btn btn-primary w-full">Submit</button>
    </form>
  );
}
