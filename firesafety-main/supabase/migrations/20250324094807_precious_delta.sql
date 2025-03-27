/*
  # Initial Schema Setup for Fire Safety Training Platform

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key, references auth.users)
      - `full_name` (text)
      - `department` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `training_modules`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `duration` (integer)
      - `order` (integer)
      - `created_at` (timestamp)
    
    - `user_progress`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `module_id` (uuid, references training_modules)
      - `completed` (boolean)
      - `score` (integer)
      - `completed_at` (timestamp)
    
    - `simulation_scenarios`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `difficulty` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create tables
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  full_name text,
  department text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE training_modules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  duration integer NOT NULL,
  order integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE user_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles ON DELETE CASCADE NOT NULL,
  module_id uuid REFERENCES training_modules ON DELETE CASCADE NOT NULL,
  completed boolean DEFAULT false,
  score integer,
  completed_at timestamptz,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, module_id)
);

CREATE TABLE simulation_scenarios (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  difficulty text CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE training_modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE simulation_scenarios ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can view all training modules"
  ON training_modules FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can view their progress"
  ON user_progress FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their progress"
  ON user_progress FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their existing progress"
  ON user_progress FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can view all simulation scenarios"
  ON simulation_scenarios FOR SELECT
  TO authenticated
  USING (true);