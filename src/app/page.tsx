import { BackgroundBeams } from "@/components/background-beams";
import { Card } from "@/components/ui/card";
import HyperText from "@/components/ui/hyper-text";
import { Meteors } from "@/components/ui/meteors";

export default function Home() {
	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			<Card className="flex flex-col px-8 py-6 w-[24em] h-[20em] relative overflow-hidden z-10">
				<HyperText className="text-3xl font-bold" text="kalidoss.dev" duration={10} />
				<p>coming soon...</p>
				{/* <Meteors number={20} /> */}
			</Card>
			<BackgroundBeams />
		</div>
	);
}
