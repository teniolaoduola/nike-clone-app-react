import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold"> What Our <span className="text-red-500">Customers</span> Say?
      </h3>
      <p className="leading-7 font-montserrat text-slate-600 m-auto mt-4 max-w-lg text-center">Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max:lg-flex-col gap-14">
      {reviews.map((review)=>(
        <ReviewCard key={review.customerName} imgURL={review.imgURL} customerName= {review.customerName} rating={review.rating} feedback={review.feedback}></ReviewCard>
      ))}
      </div>
    </section>
    )
}

export default CustomerReviews