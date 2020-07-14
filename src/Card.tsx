import * as React from 'react';

interface CardProps {
  avatar: string;
  name: string;
  role: string;
  planet: string;
}

class Card extends React.Component<CardProps> {
  render() {
    return (
      <div className="md:flex shadow-md bg-white rounded-lg p-6 mt-4">
        <img
          className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
          src={this.props.avatar}
        />
        <div className="text-center md:text-left">
          <h2 className="text-lg">{this.props.name}</h2>
          <div className="text-purple-500">{this.props.role}</div>
          <div className="text-gray-600">{this.props.planet}</div>
        </div>
      </div>
    );
  }
}

export default Card;
