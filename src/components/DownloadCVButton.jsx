
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Button = styled.button`
 background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4d4f;
  }
`
const DownloadCVButton = ({ fileName, filePath }) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = filePath;
        link.download = fileName;
        link.click();
    };

    return (
        <Button


            onClick={handleDownload}
        >
            Baixar Currículo
        </Button>
    );
};

DownloadCVButton.propTypes = {
    fileName: PropTypes.string.isRequired,
    filePath: PropTypes.string.isRequired,
};

export default DownloadCVButton;
