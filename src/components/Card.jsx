export default function Card({ title, desc, img }) {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure><img src={img} alt={title} /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>
  );
}
