import React, {Component} from 'react'

export default class ValidationErrorsComponent extends Component {

  render() {
    const { errors } = this.props

    return (
      <div>
        { errors &&
          <div>
            {errors.map((item, index) =>(
                <div key={index}>
                  {item}
                </div>
              )
            )}
          </div>
        }
      </div>
    )
  }
}