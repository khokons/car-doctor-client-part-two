import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const BookService = () => {
    const service = useLoaderData();
    const { title, _id, price, img} = service;
    const {user} = useContext(AuthContext);

    const handleBookService = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
          customerName: name,
          email,
          img,
          date,
          service: title,
          service_id: _id,
          price: price
      }

        console.log(booking)

        fetch('https://car-doctor-server-khokons-c1e583e9.vercel.app/bookingsTwo',{
          method: 'POST',
          headers:{
              'content-type': 'application/json'
          },
          body: JSON.stringify(booking)
      })

      .then(res=> res.json())
      .then(data=>{
        if(data.insertedId){
          alert('service book successfully');
        }
      })
    }

    return (
        <div>
        <h2 className="text-center text-3xl mb-5">Book service : {title}</h2>
  
        <form onSubmit={handleBookService}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input
                type="text"
                defaultValue={'$'+price}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    );
};

export default BookService;