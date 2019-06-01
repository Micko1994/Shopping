import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../../actions/userActions';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './style.scss';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import EditIcon from "@material-ui/core/Icon"
import Fab from '@material-ui/core/Fab';






class UserPage extends PureComponent {
    static propTypes = {
        getUserInfo: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
        classes: PropTypes.object.isRequired,
    };
    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getUserInfo(id)
    }

    render() {
        const user = this.props.users.users;
        return (

            <div className="user">
                <div className="userInfo">
                    <Paper >
                        <Typography variant="h4" gutterBottom>
                            Personal information
                            </Typography>
                        <List dense >
                            <ListItem button>
                                {/* iconka */}
                                <ListItemText secondary="User Name" />
                                <ListItemText primary={user.name} />
                            </ListItem>
                            <ListItem button>
                                {/* iconka */}
                                <ListItemText secondary="User Surname" />
                                <ListItemText primary={user.surname} />
                                <Fab color="secondary" aria-label="Edit">
                                    <EditIcon />
                                </Fab>
                            </ListItem>
                            <ListItem button>
                                {/* iconka */}
                                <ListItemText secondary="User Address" />
                                <ListItemText primary={user.address} />
                            </ListItem>
                            <ListItem button>
                                {/* iconka */}
                                <ListItemText secondary="User Age" />
                                <ListItemText primary={user.age} />
                            </ListItem>
                        </List>
                    </Paper>
                </div>
                <div className="userOrders">
                    <Paper >
                        <Typography variant="h4" gutterBottom>
                            Orders
                            </Typography>
                        <List dense >
                            <ListItem button>
                                {/* iconka */}
                                <ListItemText secondary="cool" />
                                <ListItemText primary={user.name} />
                            </ListItem>
                        </List>
                    </Paper>
                </div>

            </div >
        );
    }
}

const mapStateToProps = state => ({
    users: state.user,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { getUserInfo }
)(UserPage);