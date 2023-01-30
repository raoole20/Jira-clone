import {  DragEvent} from 'react'
import { Bookmark } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Avatar,
} from "@mui/material";
import { TaskInterface } from "app/interfaces";
import React from "react";
import { useDispatch } from 'react-redux';
import { taskActions } from 'app/store';

export const CardDragable = ({task, title}: Props) => {
  const dispatch = useDispatch()
  
  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData("text", task.id)
    dispatch(taskActions.isDragStart())
  }

  return (
    <Card
      sx={{ mb: "10px" }}
      draggable
      elevation={5}
      onDragStart={onDragStart}
    >
      <CardContent>
        <Typography variant="body1">{task.title}</Typography>
        <Chip label="LadingPage" color="primary" />
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Box display="flex" alignItems={"center"} justifyContent="center">
            <Bookmark /> {task.taskGrup}
          </Box>
          <Avatar alt="RE" />
        </Box>
      </CardContent>
    </Card>
  );
};

interface Props {
  title: string;
  chip?: string[];
  task: TaskInterface;
  integrant: string;
}
