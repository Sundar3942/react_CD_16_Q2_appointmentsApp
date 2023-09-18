// Write your code here
import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    appointmentList: [],
    title: '',
    date: '',
    isStarredActive: false,
  }

  changeTitleHandler = e => {
    this.setState({title: e.target.value})
  }

  changeDateHandler = e => {
    this.setState({date: e.target.value})
  }

  submitHandler = e => {
    e.preventDefault()
    const {title, date} = this.state
    const newAppointment = {id: uuidv4(), title, date, isStarred: false}

    this.setState(prevState => {
      const updatedAppointmentList = [
        ...prevState.appointmentList,
        newAppointment,
      ]
      return {title: '', date: '', appointmentList: updatedAppointmentList}
    })
  }

  starBtnHandler = id => {
    const {appointmentList} = this.state
    const updatedList = appointmentList.map(each => {
      if (each.id === id) {
        // eslint-disable-next-line no-param-reassign
        return {...each, isStarred: !each.isStarred}
      }
      return {...each}
    })
    this.setState({appointmentList: updatedList})
  }

  displayStarredAppointments = () => {
    this.setState(prevState => {
      if (prevState.isStarredActive === false) {
        const displayItems = prevState.appointmentList.filter(
          each => each.isStarred === true,
        )
        return {appointmentList: [...displayItems]}
      }
      return {appointmentList: prevState.appointmentList}
    })
  }

  render() {
    const {title, date, appointmentList} = this.state
    console.log(appointmentList)
    return (
      <div className="page">
        <div className="content-container">
          <div className="upper-section">
            <div>
              <h1>Add Appointment</h1>
              <form onSubmit={this.submitHandler}>
                <label className="label" htmlFor="title">
                  TITLE
                </label>
                <br />
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={title}
                  className="title-input"
                  placeholder="Title"
                  onChange={this.changeTitleHandler}
                />
                <br />
                <label className="label" htmlFor="date">
                  DATE
                </label>
                <br />
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={date}
                  className="date-input"
                  onChange={this.changeDateHandler}
                />
                <br />
                <button type="submit" className="btn">
                  Add
                </button>
              </form>
            </div>
            <div>
              <img
                className="appointments-image"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <hr />
          <div className="lower-section">
            <div className="appointment-star-section">
              <h1>Appointments</h1>
              <button
                type="button"
                className="starred-button"
                onClick={this.displayStarredAppointments}
              >
                Starred
              </button>
            </div>
            <ul className="appointments-container" type="none">
              {appointmentList.map(each => (
                <AppointmentItem
                  key={each.id}
                  eachAppointment={each}
                  starBtnHandler={this.starBtnHandler}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
