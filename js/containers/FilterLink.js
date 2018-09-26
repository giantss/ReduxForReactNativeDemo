/**
 * Created by zhongpeng on 2018/9/25.
 */
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter,
    filterText: ownProps.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Link)