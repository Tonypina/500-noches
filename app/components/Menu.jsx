
const Menu = ({ folderPath }) => {
    const files = Array.from({ length: 10 }, (_, i) => `${folderPath}/menu_${i + 1}.jpg`);

    return (
        <div className="my-10" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
            <ul>
                {files.map((file, index) => (
                <li key={index}>
                    <img src={file} alt={`Image ${index}`} />
                </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;