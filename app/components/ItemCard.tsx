import * as React from "react";
import Card from '@mui/material/Card';

export default function ItemCard({ index, children }: { index: number, children: React.ReactNode }) {
    return (
        <Card key={index}
              elevation={2}
              sx={{
                  margin: '1rem',
                  display: 'flex',
                  width: { xs: '100%', md: '45%', lg: '30%', xl: '23%' },
                  minWidth: '25rem',
                  minHeight: '15rem',
                  flex: 'initial',
                  flexFlow: 'column',
                  justifyContent: 'space-between'
              }}>
            {children}
        </Card>
    )
}