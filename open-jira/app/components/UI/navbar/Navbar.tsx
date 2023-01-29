import Link from 'next/link'
import { AppBar, Toolbar,  Stack} from '@mui/material'
import { Searchbar } from './Searchbar'
import { SwitchMode } from '../common'

export const Navbar = ({ onChangeMode }: any) => {

  return (
    <AppBar>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
        <img src="/logo.png" alt="" width={'65px'} />

        <Stack direction='row' spacing={2} flex="1 0">
          <Link href={'#'}>Example</Link>
          <Link href={'#'}>Example</Link>
          <Link href={'#'}>Example</Link>
          <Link href={'#'}>Example</Link>
          <Link href={'#'}>Example</Link>
          <Link href={'#'}>Example</Link>
          <Link href={'#'}>Example</Link>
          <Link href={'#'}>Example</Link>
        </Stack>

        <Searchbar />

        <SwitchMode label='Mode' onChangeMode={onChangeMode}/>
      </Toolbar>
    </AppBar>
  )
}

