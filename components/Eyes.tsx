import React, { useEffect, useState } from "react";

function Eyes() {
	const [angle, setAngle] = useState(0);
	const [angle1, setAngle1] = useState(0);
	useEffect(() => {
		window.addEventListener("mousemove", (e) => {
			let x = e.clientX - 786;
			let y = e.clientY - 463;
			let angle = Math.atan2(y, x) * (180 / Math.PI);
			setAngle(angle - 180);
			let x1 = e.clientX - 1115;
			let y1 = e.clientY - 463;
			let angle1 = Math.atan2(y1, x1) * (180 / Math.PI);
			setAngle1(angle1 - 180);
		});
	});

	return (
		<div className="overflow-hidden">
			<div
				data-scroll
				data-scroll-section
				data-scroll-speed="-.7"
				className="eyes "
			>
				<div className='h-screen bg-cover relative bg-center w-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
					<div className=" absolute flex gap-10 -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 ">
						<div className="h-[15vw] w-[15vw] flex justify-center items-center bg-zinc-100 rounded-full">
							<div className="h-3/5 w-3/5 relative bg-zinc-900 rounded-full">
								<div
									style={{ transform: `translate(-50%,-50%) rotate(${angle}deg)` }}
									className={`h-6 w-full absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]`}
								>
									<div className="h-6 w-6 flex justify-center items-center bg-zinc-100 rounded-full"></div>
								</div>
							</div>
						</div>
						<div className="h-[15vw] w-[15vw] flex justify-center items-center bg-zinc-100 rounded-full">
							<div className="h-3/5 w-3/5 relative bg-zinc-900 rounded-full">
								<div
									style={{ transform: `translate(-50%,-50%) rotate(${angle1}deg)` }}
									className={`h-6 w-full absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]`}
								>
									<div className="h-6 w-6 flex justify-center items-center bg-zinc-100 rounded-full"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Eyes;
