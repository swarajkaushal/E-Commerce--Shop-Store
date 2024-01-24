import React from 'react'
import Achivement from './Tables/Achivement'
import MonthlyOverview from './Tables/MonthlyOverView'
import Grid from "@mui/material/Grid";
import { BriefcaseVariantOutline, CurrencyUsd, HelpCircleOutline, Poll } from "mdi-material-ui";
import TotalEarning from './Tables/TotalEarning';
import RecentOrders from './Tables/RecentOrders';
import RecentlyAddeddProducts from './Tables/RecentlyAddeddProducts';
import SalesOverTime from './Tables/SalesOverTime';
import CardStatsVertical from '../../Styles/CardStatsVertical';
import CustomersTable from './CustomersTable';

const AdminDashboard = () => {
  return (
    <div className='px-10'>
      <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Achivement />
            </Grid>
            <Grid item xs={12} md={8}>
              <MonthlyOverview />
            </Grid>
            
            <Grid item xs={12} md={6} lg={4}>
              <TotalEarning />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <CardStatsVertical
                    stats="$25.6k"
                    icon={<Poll />}
                    color="success"
                    trendNumber="+42%"
                    title="Total Profit"
                    subtitle="Weekly Profit"
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardStatsVertical
                    stats="$78"
                    title="Refunds"
                    trend="negative"
                    color="secondary"
                    trendNumber="-15%"
                    subtitle="Past Month"
                    icon={<CurrencyUsd />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardStatsVertical
                    stats="862"
                    trend="negative"
                    trendNumber="-18%"
                    title="New Orders"
                    subtitle="Weekly Orders"
                    icon={<BriefcaseVariantOutline />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardStatsVertical
                    stats="15"
                    color="warning"
                    trend="negative"
                    trendNumber="-18%"
                    subtitle="Last Week"
                    title="Sales Queries"
                    icon={<HelpCircleOutline />}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
            <CustomersTable />
            </Grid>
            <Grid item xs={12} md={12} lg={8}>
              <RecentOrders />
            </Grid>
             <Grid item xs={12} md={12} lg={8}>
              <RecentlyAddeddProducts />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <SalesOverTime/>
            </Grid>
           
            <Grid item xs={12}>
              <CustomersTable />
            </Grid> 
          </Grid>
    </div>
  )
}

export default AdminDashboard