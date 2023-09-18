// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {eachAppointment, starBtnHandler} = props
  const {id, title, date, isStarred} = eachAppointment
  const dateImported = new Date(date)

  const imgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const starBtnClicked = () => {
    starBtnHandler(id)
  }

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return (
    <li className="appointment-item">
      <div className="d-row-separated">
        <p>{title}</p>
        <button
          data-testid="star"
          type="button"
          className="star-btn"
          onClick={starBtnClicked}
        >
          <img src={imgUrl} alt="star" />
        </button>
      </div>
      <div>
        <p className="appointment-para">
          Date:{' '}
          {`${dateImported.getDate()} ${months[dateImported.getMonth()]} 
          ${dateImported.getFullYear()}, ${days[dateImported.getDay()]}`}
        </p>
      </div>
    </li>
  )
}

export default AppointmentItem
