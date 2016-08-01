/**
 * Created by michaelmalura on 30/07/16.
 */

import React, {
	PropTypes,
	Component
} from 'react';
import {Image} from 'react-native';
import Style from './style';

class BackgroundImage extends Component {
	render() {
		return (
			<Image source={this.props.image} style={[Style.image, this.props.imageStyle]}/>
		)
	}
}

BackgroundImage.propTypes = {
	image     : PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object
	]).isRequired,
	imageStyle: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.array,
		PropTypes.object
	]),
};
BackgroundImage.defaultProps = {};

export default BackgroundImage;