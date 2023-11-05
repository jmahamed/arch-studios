import LeaderCard from "./LeaderCard";

const TheLeaders = () => {

    const leadersData = [
        {
            name: 'Jake Richards',
            imageSrc: './avatar-jake.jpg',
            title: 'Chief Architect'
        },
        {
            name: 'Thompson Smith',
            imageSrc: './avatar-thompson.jpg',
            title: 'Head of Finance'
        },
        {
            name: 'Jackson Rourke',
            imageSrc: './avatar-jackson.jpg',
            title: 'Lead Designer'
        },
        {
            name: 'Maria Simpson',
            imageSrc: './avatar-maria.jpg',
            title: 'Senior Architect'
        }
    ]

    return (
        <div className="leaders">
            <h3>The <br />Leaders</h3>
            <div className="leaders-grid">
                {leadersData.map((leader, index) => (
                    <LeaderCard key={index} {...leader} />
                ))}
                {/* <div className="leader">
                    <img src="./avatar-jake.jpg" alt="jake" />
                    <h4>Jake Richards</h4>
                    <p>Chief Architect</p>
                </div> */}
            </div>
        </div>
    );
}

export default TheLeaders;