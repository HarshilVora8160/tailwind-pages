import BlueChipsLeftSidebar from "../ChildComponents.jsx/BlueChipLeftSidebar"
import MainBody from "../ChildComponents.jsx/BlueChipsMainBody"
import BlueChipsNavbar from "../ChildComponents.jsx/BlueChipsNavbar"

const BlueChips = () => {
    return (
        <div className="grid grid-cols-12 p-4" >
            <div className="col-span-2">
                <div className="bg-white shadow p-2 rounded-lg" >
                    <BlueChipsLeftSidebar />
                </div>
            </div>
            <div className="col-span-10" >
                <BlueChipsNavbar />
                <MainBody />
            </div>
        </div>
    )
}

export default BlueChips