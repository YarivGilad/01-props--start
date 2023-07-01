interface Props {
  action: string;
  subject: string;
  day?: string;
  feel?: string; 
}
function Thumb({ action, subject, day, feel }: Props) {
  return (
    <div className="thumb">
      <h4 className="headline fz35 white-text">Thumbnail component</h4>
      <img src={`https://picsum.photos/80?r=${Math.random()}`} alt="some random description" />
      <h5 className="paragraph white-text fz30">
        passed props: {action} {subject} {day} {feel} 
      </h5>
    </div>
  );
}
export default Thumb;
