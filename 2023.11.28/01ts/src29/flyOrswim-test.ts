import { Bird, Fish } from "./BirdAndFish";
import { flyOrswim } from "./flyOrswim";

const BirdT = new Bird();
const FishT = new Fish();

console.log(BirdT.fly(), FishT.swim());

[BirdT, FishT].forEach(flyOrswim);
