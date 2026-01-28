import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function HoverWord({ text, reading, meaning, isNewWord = false }) {
  const tooltip = (
    <Tooltip id={`tooltip-${text}`}>
      <div><strong>{reading}</strong></div>
      <div>{meaning}</div>
    </Tooltip>
  );

  const wordStyle = {
    cursor: 'help',
    borderBottom: isNewWord ? '2px solid #0d6efd' : '1px dotted #6c757d',
    padding: '0 2px',
    backgroundColor: isNewWord ? 'rgba(13, 110, 253, 0.1)' : 'transparent',
    borderRadius: isNewWord ? '2px' : '0'
  };

  return (
    <OverlayTrigger
      placement="top"
      overlay={tooltip}
      delay={{ show: 100, hide: 200 }}
    >
      <span style={wordStyle} data-testid={`hover-word-${text}`}>
        {text}
      </span>
    </OverlayTrigger>
  );
}

export default HoverWord;
