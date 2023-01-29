import { Inbox } from "@mui/icons-material"
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"


export const DrawerItem = ({ open, Icon, text }: Props) => {
  return (
    <List>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <Icon />
          </ListItemIcon>
          <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
    </List>
  )
}

interface Props {
  open: boolean
  text: string
  Icon: any
}