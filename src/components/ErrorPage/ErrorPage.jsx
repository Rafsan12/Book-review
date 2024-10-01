import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import animationData from "../../assets/40o4.json";

const ErrorPage = () => {
	return (
		<div>
			<div className='text-center'>
				<Player
					autoplay
					loop
					src={animationData}
					style={{ height: "450px", width: "450px" }}
				/>

				<Link to='/'>
					<button className='mt-4 w-auto btn btn-outline btn-secondary px-20'>
						Go To Back Home
					</button>
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
