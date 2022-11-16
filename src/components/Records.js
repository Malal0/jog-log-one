import '../SCSS/Records.scss'

export default function Records() {
    return (
        <div className="records">
            <button className='edit-btn'>edit</button>
            <button className='view-btn'>view all</button>
            <label>date</label>
            <label>distance</label>
            <label>time</label>
        </div>
    )
}