import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

const Cards = ( { data: {confirmed, recovered, deaths } } ) => {

    // We can just check for confirmed. If this value isn't loaded then nothing else is
    if (!confirmed) {
        return ' ';
    }

    return (
        <div>
            <div className={styles.container}>
                <Grid container spacing={2} justify="center">
                    <Grid item xs={5} md={2} component={Card} className={cx(styles.card, styles.confirmed)}>
                        <CardContent>
                            <Typography color="textSecondary">Confirmed</Typography>
                            <Typography variant="h5" component="h2">
                                <CountUp start={0} end={confirmed.value} duration={3.00} separator="," />
                            </Typography>
                        </CardContent>
                    </Grid>

                    <Grid item xs={5} md={2} component={Card} className={cx(styles.card, styles.recovered)}>
                        <CardContent>
                            <Typography color="textSecondary">Recovered</Typography>
                            <Typography variant="h5" component="h2">
                                <CountUp start={0} end={recovered.value} duration={3.00} separator="," />
                            </Typography>
                        </CardContent>
                    </Grid>

                    <Grid item xs={5} md={2} component={Card} className={cx(styles.card, styles.deaths)}>
                        <CardContent>
                            <Typography color="textSecondary">Deaths</Typography>
                            <Typography variant="h5" component="h2">
                                <CountUp start={0} end={deaths.value} duration={3.00} separator="," />
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Cards