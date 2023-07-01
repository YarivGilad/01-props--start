// import { Component } from 'react'

// interface Props {
//     action: string;
//     subject: string;
// }

// class Card extends Component<Props> {

//     myName = 'Rumpelstiltskin'

//     constructor(props:Props) {
// 		super(props);
// 		console.log('in constructor()')
// 		console.log(props)
// 		this.myName = 'Nevuchadnetzer';
// 	}

// 	render() {
// 		console.log('in render()')
// 		console.log(this.props)
// 		return (
// 			<div className="card">
// 				<h1 className="headline">I am a Card {this.myName}</h1>
// 				<h2 className="paragraph">
// 					{2 + 2} my goal is to {this.props.action} some {this.props.subject}
// 				</h2>
// 			</div>
// 		)
// 	}
// }

// export default Card;

//--------------------------------------------------------
//   Destructure - extract values from the props object
//--------------------------------------------------------
// import { Component } from 'react'

// interface Props {
//     action: string;
//     subject: string;
// }
// export default class Card extends Component<Props> {
// 	render() {
// 		const { action: act = 'something', subject } = this.props

// 		return (
// 			<div className="card">
// 				<h1 className="headline">I am Card</h1>
// 				<h2 className="paragraph">
// 					i {act} {subject}
// 				</h2>
// 			</div>
// 		)
// 	}
// }
// // export default Card
//-------------------------------------
//   Function Components
//-------------------------------------

// interface Props {
//   action: string;
//   subject: string;
// }

// export function Card(props: Props) {
//   const { action, subject } = props;

//   return (
//     <div className="card">
//       <h1 className="headline">I am a Card</h1>
//       <h2 className="paragraph">
//         you {action} {subject}
//       </h2>
//     </div>
//   );
// }
// export default Card;

//-------------------------
//   Inline destructure
//--------------------------
// interface Props {
//   action: string;
//   subject: string;
// }

// function Card({ action, subject }: Props) {
//   return (
//     <div className="card">
//       <h1 className="headline">I am a Card</h1>
//       <h2 className="paragraph">
//         i {action} {subject}
//       </h2>
//     </div>
//   );
// }
// export default Card;

//---------------------------------
//   Minimal function component
//---------------------------------
// interface Props {
//   action: string;
//   subject: string;
// }

// const Card = ({ action, subject }: Props) => (
//   <div className="card">
//     <h1 className="headline">I am a Card</h1>
//     <h2 className="paragraph">
//       i {action} {subject}
//     </h2>
//   </div>
// );

// export default Card;
//-----------------------------------------
//   JSX possible outputs
//   container tag / React.fragment
//   / string / null / Array of JSX blocks
//-----------------------------------------
// interface Props {
//   action: string;
//   subject: string;
// }
// const Card = ({ action, subject }: Props) => {
//   // return `you ${action} ${subject}`
//   return [
//     <div className="card">
//       <h1 className="headline">I am a Card</h1>
//       <h2 className="paragraph">
//         i {action} {subject}
//       </h2>
//     </div>,
//     <div className="card">
//       <h1 className="headline">I am a Card</h1>
//       <h2 className="paragraph">
//         i {action} {subject}
//       </h2>
//     </div>,
//   ];
// };

// export default Card;

//---------------------------------
//   Spread objects into props
//---------------------------------
import Thumb from './Thumb'

interface Props {
  action: string;
  subject: string;
}

function Card(props:Props) {
	// console.log(props)
	const { action, subject } = props

	const extraData = {
		action: 'kiss',
		day: 'Wednesday',
		feel: 'great'
	}

	return (
		<div className="card">
			<h1 className="headline">I am a Card</h1>
			<h2 className="paragraph">
				my goal is to {action} someeee {subject}
			</h2>
			<Thumb action={props.action} subject={props.subject} />
			<Thumb {...extraData} {...props} />
		</div>
	)
}
export default Card
//
