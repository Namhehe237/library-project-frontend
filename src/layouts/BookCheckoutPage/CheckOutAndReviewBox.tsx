import { Link } from "react-router-dom";
import BookModel from "../../models/BookModel";

export const CheckOutAndReviewBox: React.FC<{
    book: BookModel | undefined, mobile: boolean, currentLoansCount: number,
    isAuthentication: any, isCheckedOut: boolean, checkoutBook : any
}> = (props) => {

    function buttonRender() {
        if (props.isAuthentication) {
            if (!props.isCheckedOut && props.currentLoansCount < 5) {
                return (
                    <button className="btn btn-success btn-lg">Checkout</button>
                );
            } else if (props.isCheckedOut) {
                return (
                    <p><b>Book checked out</b></p>
                );
            } else if (!props.isCheckedOut) {
                return (
                    <p className="text-danger">Too many books checked out</p>
                );
            }
        }
        return (
            <Link to={`/login`} className="btn btn-success btn-lg">Sign in</Link>
        );
    }

    return (
        <div className={props.mobile ? 'card d-flex mt-5' : 'card col-3 container d-flex mb-5'}>
            <div className="card-body container">
                <div className="mt-3">
                    <p>
                        <b>{props.currentLoansCount}/5</b>
                        books checked out 
                    </p>
                    <hr />
                    {props.book && props.book.copiesAvailable && props.book.copiesAvailable > 0 ?
                        <h4 className="text-success"> Available</h4>
                        : <h4 className="text-danger">Wait List</h4>
                    }
                    <div className="row">
                        <p className="col-6 lead">
                            <b>{props.book?.copies}</b> Copies
                        </p>
                        <p className="col-6 lead">
                            <b>{props.book?.copiesAvailable}</b> Available
                        </p>
                    </div>
                </div>
                {buttonRender()}
                <hr />
                <p className="mt-3">This number can change until placing order has been complete</p>
                <p>Sign in to be able to leave a review</p>
            </div>
        </div>
    );
}