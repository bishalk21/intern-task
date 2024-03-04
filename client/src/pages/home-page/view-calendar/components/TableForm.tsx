"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MoveRight, Pencil } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { type EventForm as FormData } from "./EventTimeTable";

interface TableFormProps {
  handleSaveEvent: (title: FormData) => void;
  selectedSlot: { start: Date; end: Date } | null; // Define the type for selectedSlot
}

export function TableForm({ handleSaveEvent, selectedSlot }: TableFormProps) {
  const form = useForm<FormData>();

  const defaultDateValue = selectedSlot?.start.toISOString().split("T")[0];
  const defaultStartTimeValue = selectedSlot?.start
    .toISOString()
    .split("T")[1]
    .slice(0, 5);
  const defaultEndTimeValue = selectedSlot?.end
    .toISOString()
    .split("T")[1]
    .slice(0, 5);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    handleSaveEvent(data);
    // console.log(data); // You can handle the form submission logic here
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-3">
                <Pencil />
                <FormControl>
                  <Input placeholder="Add title" {...field} />
                </FormControl>
              </div>
              <FormDescription className="text-end">
                Enter the title of the event or meeting.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2 items-center">
          <div className="flex gap-2">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="date"
                      {...field}
                      defaultValue={defaultDateValue}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="startTime"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="time"
                      {...field}
                      defaultValue={defaultStartTimeValue}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <MoveRight />

          <div className="flex gap-2">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="date"
                      {...field}
                      defaultValue={defaultDateValue}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endTime"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="time"
                      {...field}
                      defaultValue={defaultEndTimeValue}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex">{`30m`}</div>
        </div>

        <div className="flex">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Type your message here." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Create Event</Button>
      </form>
    </Form>
  );
}
