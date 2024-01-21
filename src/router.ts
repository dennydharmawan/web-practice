// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client';

export type Path =
  | `/`
  | `/animation/card`
  | `/animation/framer-motion/header-logo`
  | `/animation/framer-motion/switch`
  | `/animation/hamburger-menu`
  | `/experiments/tailwind-theme`
  | `/experiments/vertical-align`
  | `/icodethis/icodemas/day-1`
  | `/icodethis/icodemas/day-12`
  | `/icodethis/icodemas/day-13`
  | `/icodethis/icodemas/day-2`
  | `/icodethis/icodemas/day-21`
  | `/icodethis/restaurant-app`
  | `/icodethis/testimonial-carousel`
  | `/layout/grid-container`;

export type Params = {};

export type ModalPath = never;

export const { Link, Navigate } = components<Path, Params>();
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>();
export const { redirect } = utils<Path, Params>();
