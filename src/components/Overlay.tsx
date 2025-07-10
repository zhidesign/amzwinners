export default function Overlay(props) {
    return (
          <div 
            className="absolute inset-0 bg-opacity-0 flex items-center justify-center cursor-pointer z-10"
            onClick={props.handleOverlayClick}>
          </div>
    )
}