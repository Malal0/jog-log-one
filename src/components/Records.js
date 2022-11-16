import '../SCSS/Records.scss'

export default function Records() {
    return (
        <div className="records">
            <button className='edit-btn'>edit</button>
            <button className='view-btn'>view all</button>
            <label className='date-lbl'>date</label>
            <label className='distance-lbl'>distance</label>
            <label className='time-lbl'>time</label>
        </div>
    )
}