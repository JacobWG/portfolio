import * as React from "react";
import Card from '@mui/material/Card';

export default function ItemCard({ key, children }: { key: number, children: React.ReactNode }) {
    return (
        <Card key={key}
              elevation={2}
              sx={{
                  margin: '1rem',
                  display: 'flex',
                  width: { xs: '100%', md: '45%', lg: '30%' },
                  flex: 'initial',
                  flexFlow: 'column',
                  justifyContent: 'space-between'
              }}>
            {children}
        </Card>
    )
}