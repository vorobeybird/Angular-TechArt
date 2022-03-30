import { ConstantPool } from '@angular/compiler';

export class DataService {
  constructor() {}

  private test: string = `Not all people who wander are lost.
They're playing the piano while flying in the plane.
Acres of almond trees lined the interstate highway which complimented the crazy driving nuts.
Please wait outside of the house.
Malls are great places to shop; I can find everything I need under one roof.
The fish listened intently to what the frogs had to say.
It had been sixteen days since the zombies first attacked.
I would have gotten the promotion, but my attendance wasnt good enough.
I want a giraffe, but I'm a turtle eating waffles.
Be careful with that butter knife.
Two more days and all his problems would be solved.
Mom didnt understand why no one else wanted a hot tub full of jello.
You realize you're not alone as you sit in your bedroom massaging your calves after a long day of playing tug-of-war with Grandpa Joe in the hospital.
He had a vague sense that trees gave birth to dinosaurs.
Greetings from the galaxy MACS0647-JD, or what we call home.
She did a happy dance because all of the socks from the dryer matched.
Potato wedges probably are not best for relationships.
The fox in the tophat whispered into the ear of the rabbit.
When I was little I had a car door slammed shut on my hand and I still remember it quite vividly.
Chocolate covered crickets were his favorite snack.
She had the gift of being able to paint songs.
Yeah, I think it's a good environment for learning English.
Everyone pretends to like wheat until you mention barley.
She opened up her third bottle of wine of the night.
The truth is that you pay for your lifestyle in hours.
It's always a good idea to seek shelter from the evil gaze of the sun.
He had concluded that pigs must be able to fly in Hog Heaven.
Tomatoes make great weapons when water balloons arent available.
He ran out of money, so he had to stop playing poker.
Douglas figured the best way to succeed was to do the opposite of what he'd been doing all his life.
The father died during childbirth.
I know many children ask for a pony, but I wanted a bicycle with rockets strapped to it.
The delicious aroma from the kitchen was ruined by cigarette smoke.
The crowd yells and screams for more memes.
There was coal in his stocking and he was thrilled.
The bees decided to have a mutiny against their queen.
The elderly neighborhood became enraged over the coyotes who had been blamed for the poodles disappearance.
She let the balloon float up into the air with her hopes and dreams.
The blue parrot drove by the hitchhiking mongoose.
The green tea and avocado smoothie turned out exactly as would be expected.
She looked into the mirror and saw another person.
Kevin embraced his ability to be at the wrong place at the wrong time.
This is a Japanese doll.
When he encountered maize for the first time, he thought it incredibly corny.
The light that burns twice as bright burns half as long.
He stomped on his fruit loops and thus became a cereal killer.
He drank life before spitting it out.
They were excited to see their first sloth.
The murder hornet was disappointed by the preconceived ideas people had of him.
She cried diamonds.
People who insist on picking their teeth with their elbows are so annoying!
She traveled because it cost the same as therapy and was a lot more enjoyable.
Iguanas were falling out of the trees.
At that moment I was the most fearsome weasel in the entire swamp.
There's a growing trend among teenagers of using frisbees as go-cart wheels.
It isn't true that my mattress is made of cotton candy.
The door swung open to reveal pink giraffes and red elephants.
Karen believed all traffic laws should be obeyed by all except herself.
Hit me with your pet shark!
We will not allow you to bring your pet armadillo along.
Flying fish flew by the space station.
Sarah ran from the serial killer holding a jug of milk.
I became paranoid that the school of jellyfish was spying on me.
The most exciting eureka moment I've had was when I realized that the instructions on food packets were just guidelines.
The reservoir water level continued to lower while we enjoyed our long shower.
We should play with legos at camp.
Flesh-colored yoga pants were far worse than even he feared.
There's a reason that roses have thorns.
As he looked out the window, he saw a clown walk by.
I checked to make sure that he was still alive.
Instead of a bachelorette party
I hear that Nancy is very pretty.
I always dreamed about being stranded on a desert island until it actually happened.
Dan took the deep dive down the rabbit hole.
I was very proud of my nickname throughout high school but today- I couldn’t be any different to what my nickname was.
Stop waiting for exceptional things to just happen.
After coating myself in vegetable oil I found my success rate skyrocketed.
She cried diamonds.
People keep telling me "orange" but I still prefer "pink".
I liked their first two albums but changed my mind after that charity gig.
Baby wipes are made of chocolate stardust.
She was the type of girl that always burnt sugar to show she cared.
This made him feel like an old-style rootbeer float smells.
I've traveled all around Africa and still haven't found the gnu who stole my scarf.
He wondered if it could be called a beach if there was no sand.
He stepped gingerly onto the bridge knowing that enchantment awaited on the other side.
The tumbleweed refused to tumble but was more than willing to prance.
He was all business when he wore his clown suit.
He never understood why what, when, and where left out who.
It doesn't sound like that will ever be on my travel list.
The Great Dane looked more like a horse than a dog.
Peter found road kill an excellent way to save money on dinner.
Mom didn’t understand why no one else wanted a hot tub full of jello.
On a scale from one to ten, what's your favorite flavor of random grammar?
No matter how beautiful the sunset, it saddened her knowing she was one day older.
The rusty nail stood erect, angled at a 45-degree angle, just waiting for the perfect barefoot to come along.
As the years pass by, we all know owners look more and more like their dogs.
The irony of the situation wasn't lost on anyone in the room.
People generally approve of dogs eating cat food but not cats eating dog food.
I can't believe this is the eighth time I'm smashing open my piggy bank on the same day!`;

  public result = this.test.split('\n').sort();

  public showResult = () => {
    console.log(this.result);
  };
}
